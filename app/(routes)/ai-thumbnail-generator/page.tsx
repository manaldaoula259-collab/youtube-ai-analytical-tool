"use client"

import { RunStatus } from '@/services/GlobalApi' // Function to check Inngest function run status
import axios from 'axios'
import { ArrowUp, ImagePlus, Loader2, User, X } from 'lucide-react' // Icons
import Image from 'next/image'
import React, { useState } from 'react'
import ThumbnailList from './_components/ThumbnailList' // Component to list previously generated thumbnails
import { useAuth } from '@clerk/nextjs' // Clerk auth hook
import { toast } from 'sonner' // Notification library

function AiThumbnailGenerator() {
    // State management
    const [userInput, setUserInput] = useState<string>()
    const [referanceImage, setReferanceImage] = useState<any>()
    const [faceImage, setFaceImage] = useState<any>()
    const [refernaceImagePreview, setRefernaceImagePreview] = useState<string>()
    const [faceImagePreview, setFaceImagePreview] = useState<string>()
    const [loading, setLoading] = useState(false)
    const [outputThumbnailImage, setOutputThumbnailImage] = useState('')

    // Clerk Auth Hook
    const { has } = useAuth()

    /**
     * Handle image file upload and generate a local preview
     */
    const onHandleFileChange = (field: string, e: any) => {
        const selectedFile = e.target.files[0]
        if (field === 'referanceImage') {
            setReferanceImage(selectedFile)
            setRefernaceImagePreview(URL.createObjectURL(selectedFile))
        } else {
            setFaceImage(selectedFile)
            setFaceImagePreview(URL.createObjectURL(selectedFile))
        }
    }

    /**
     * Handle form submission: validate subscription, send images + text to backend, poll status until result
     */
    const onSubmit = async () => {
        setLoading(true)

        // Check user plan using Clerk
        //@ts-ignore
        const hasPremiumAccess = has({ plan: 'pro_members' })
        if (!hasPremiumAccess) {
            toast.error('Please subscribe to Pro Plan!')
            setLoading(false)
            return
        }

        // Prepare form data to send to the API
        const formData = new FormData()
        userInput && formData.append('userInput', userInput)
        referanceImage && formData.append('refImage', referanceImage)
        faceImage && formData.append('faceImage', faceImage)

        try {
            // Post to API route
            const result = await axios.post('/api/generate-thumbnail', formData)

            // Polling the Inngest run status until 'Completed'
            while (true) {
                const runStatus = await RunStatus(result.data.runId)
                if (runStatus && runStatus[0]?.status === 'Completed') {
                    setOutputThumbnailImage(runStatus[0].output)
                    setLoading(false)
                    break
                }
                if (runStatus && runStatus[0]?.status === 'Cancelled') {
                    setLoading(false)
                    break
                }
                await new Promise(resolve => setTimeout(resolve, 1000)) // wait 1 second before checking again
            }
        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }

    return (
        <div>
            <div className='px-10 md:px-20 lg:px-40'>
                {/* Title & Description */}
                <div className='flex items-center justify-center mt-5 flex-col gap-2 '>
                    <h2 className='font-bold text-4xl'>AI Thumbnail Generator</h2>
                    <p className='text-gray-400 text-center '>
                        Turn any video into a click magnet with thumbnails that grab attention and drive views.
                        Our AI YouTube thumbnail maker creates professional designs instantly - no design skills needed.
                    </p>
                </div>

                {/* Thumbnail Output or Loading UI */}
                <div>
                    {loading ? (
                        <div className='w-full bg-secondary rounded-2xl p-10 h-[250px] mt-6 flex items-center justify-center'>
                            <Loader2 className='animate-spin' />
                            <h2>Please Wait... Thumbnail is generating</h2>
                        </div>
                    ) : (
                        outputThumbnailImage && (
                            <Image
                                src={outputThumbnailImage}
                                alt='Thumbnail'
                                width={500}
                                height={400}
                                className='aspect-video w-full'
                            />
                        )
                    )}
                </div>

                {/* Text Input + Submit */}
                <div className='flex gap-5 items-center p-3 border rounded-xl mt-10 bg-secondary'>
                    <textarea
                        placeholder='Enter your YouTube video title or description'
                        className='w-full outline-0 bg-transparent'
                        onChange={(event) => setUserInput(event.target.value)}
                    />
                    <div
                        className='p-3 bg-gradient-to-t from-red-500 to-orange-500 rounded-full cursor-pointer'
                        onClick={onSubmit}
                    >
                        <ArrowUp />
                    </div>
                </div>

                {/* Image Uploads: Reference + Face */}
                <div className='mt-3 flex gap-3'>
                    {/* Reference Image */}
                    <label htmlFor='refernaceImageUpload' className='w-full'>
                        {!refernaceImagePreview ? (
                            <div className='p-4 w-full border rounded-xl bg-secondary flex gap-2 items-center justify-center hover:scale-105 transition-all cursor-pointer'>
                                <ImagePlus />
                                <h2>Reference Image</h2>
                            </div>
                        ) : (
                            <div className='relative'>
                                <X
                                    className='absolute cursor-pointer'
                                    onClick={() => setRefernaceImagePreview(undefined)}
                                />
                                <Image
                                    src={refernaceImagePreview}
                                    alt='Reference'
                                    width={100}
                                    height={100}
                                    className='w-[70px] h-[70px] object-cover rounded-sm'
                                />
                            </div>
                        )}
                    </label>
                    <input
                        type='file'
                        id='refernaceImageUpload'
                        className='hidden'
                        onChange={(e) => onHandleFileChange('referanceImage', e)}
                    />

                    {/* Face Image */}
                    <label htmlFor='includeFace' className='w-full'>
                        {!faceImagePreview ? (
                            <div className='p-4 w-full border rounded-xl bg-secondary flex gap-2 items-center justify-center hover:scale-105 transition-all cursor-pointer'>
                                <User />
                                <h2>Include Face</h2>
                            </div>
                        ) : (
                            <div className='relative'>
                                <X
                                    className='absolute cursor-pointer'
                                    onClick={() => setFaceImagePreview(undefined)}
                                />
                                <Image
                                    src={faceImagePreview}
                                    alt='Face'
                                    width={100}
                                    height={100}
                                    className='w-[70px] h-[70px] object-cover rounded-sm'
                                />
                            </div>
                        )}
                    </label>
                    <input
                        type='file'
                        id='includeFace'
                        className='hidden'
                        onChange={(e) => onHandleFileChange('faceImage', e)}
                    />
                </div>
            </div>

            {/* List of previously generated thumbnails */}
            <ThumbnailList />
        </div>
    )
}

export default AiThumbnailGenerator
