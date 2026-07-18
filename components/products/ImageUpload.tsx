"use client"
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { useState } from 'react'
import { TbPhotoPlus } from 'react-icons/tb'

export default function ImageUpload() {
    const [ imageUrl, setImageUrl ] = useState('')

  return (
    <CldUploadWidget 
        uploadPreset='SnackStation_Products'
        options={{
            maxFiles: 1,
            /* maxFileSize: 51200  */// 50 kbs 
        }}
        onSuccess={(result, { widget }) => {
            if(result.event === "success") {
                widget.close // If the event is successfully we're gonna close the modal with the widget
                //@ts-ignore
                setImageUrl(result.info?.secure_url)
            }
        }}
    >
        {({open}) => (
            <>
                <div className='space-y-2'>
                    <label className="text-slate-800">Product Image</label>
                    <div className='relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex 
                        flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100'
                        onClick={() => open()}
                    >
                        <TbPhotoPlus
                            size={50}
                        />
                        <p className='text-lg font-semibold'>Add Image</p>

                        {imageUrl && (
                            <div className='absolute inset-0 w-full h-full'>
                                <Image 
                                    fill
                                    style={{objectFit: 'contain'}}
                                    src={imageUrl}
                                    alt='Product Image'
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Send the imageUrl to the databse to save it */}
                <input type="hidden" name='image' value={imageUrl} /> 
            </>
        )}
    </CldUploadWidget>
  )
}
