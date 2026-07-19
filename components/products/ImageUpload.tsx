"use client"
import { getImagePath } from '@/src/utils'
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { useState } from 'react'
import { TbPhotoPlus } from 'react-icons/tb'

type ImageUploadProps = {
    image: string | undefined
}

export default function ImageUpload({image}:ImageUploadProps) {
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
                        {!imageUrl && ( <p className='text-lg font-semibold'>Add Image Clicking Here</p> )}
                        

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

                {image && !imageUrl && (
                    <div className=''>
                        <label htmlFor="">Current Image: </label>
                        <div className='relative w-65 h-64'>
                            <Image 
                                fill 
                                src={getImagePath(image)} 
                                alt='Product Image'
                                style={{objectFit: 'contain'}}
                            />
                        </div>
                    </div>
                )}

                {/* Send the imageUrl to the databse to save it */}
                <input 
                    type="hidden" 
                    name='image' 
                    defaultValue={imageUrl ? imageUrl : image} // We use the same Url String if the user doesn't upload a new image
                /> 
            </>
        )}
    </CldUploadWidget>
  )
}
