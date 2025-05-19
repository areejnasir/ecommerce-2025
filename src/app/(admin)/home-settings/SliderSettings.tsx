"use client";
import { useRef } from "react";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import SaveBtn from "@/app/(admin)/component/saveBtn";

const SliderSettings = ({slug}: any) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(slug, "slug", "hello");
    }
    
    return <form onSubmit={handleSubmit}>
        <div className="w-full flex justify-end items-center">
            <label htmlFor="slide" className="text-black font-bold">Select Slide:</label>
            <select className="ml-2 border-2 border-gray-300 text-black p-2 cursor-pointer outline-none w-[200px]" id="slide">
                <option value="slide1">Slide 1</option>
                <option value="slide2">Slide 2</option>
                <option value="slide3">Slide 3</option>
            </select>
        </div>
        {/* image */}
        <div className="w-full mt-5 flex justify-center items-center border-2 border-gray-300 rounded-sm p-2">
            <div className="max-w-[500px] min-w-[200px] w-full">
                {imagePreview && (
                    <div className="w-full h-[300px] bg-(--graybackground) rounded-sm">
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-full object-contain rounded-sm mb-2"
                        />
                    </div>
                )}

                {!imagePreview && <FontAwesomeIcon
                    icon={faImage}
                    className="text-[100px] h-full cursor-pointer m-auto font-bold text-center"
                    style={{ display: "block" }}
                />}

                <input type="file" accept="image/png, image/jpeg" ref={fileInputRef} onChange={handleChange} className="hidden" />
                <button type="button" className="border-2 border-gray-300 mt-2 p-2 rounded-sm text-sm cursor-pointer w-full" onClick={handleUpload}>Upload Image</button>
            </div>
        </div>
        <div className="grid grid-flow-col grid-rows-1 gap-4 mt-5">
            {/* collection heading */}
            <div className="w-full">
                <label htmlFor="collection-heading" className="font-bold text-black block">Collection Heading*</label>
                <input type="text" id="collection-heading" placeholder="SUMMER COLLECTION" className="w-full outline-none text-sm border-2 border-gray-300 rounded-sm p-2" required />
            </div>

            {/* main heading */}
            <div className="w-full">
                <label htmlFor="main-heading" className="font-bold text-black block">Main Heading*</label>
                <input type="text" id="main-heading" placeholder="Full - Winter..." className=" w-full outline-none text-sm border-2 border-gray-300 rounded-sm p-2" required />
            </div>
        </div>

        {/* paragraph */}
        <div className="w-full mt-5">
            <label htmlFor="collection-heading" className="font-bold text-black block">Slider Paragraph*</label>
            <textarea id="collection-heading" placeholder="A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality." className="h-[150px] w-full outline-none text-sm border-2 border-gray-300 rounded-sm p-2" required />
        </div>
        {/* button */}
        <SaveBtn type="submit" />
    </form>
}

export default SliderSettings