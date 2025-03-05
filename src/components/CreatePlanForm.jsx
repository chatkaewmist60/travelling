import { useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { Upload, Trash2 } from "lucide-react"; // Import icon จาก lucide-react

const CreatePlanForm = () => {
    const [planName, setPlanName] = useState("");
    const [body, setBody] = useState("");
    const [message, setMessage] = useState("");
    const [images, setImages] = useState([]); // อัปโหลดหลายรูปได้

    // อัปโหลดรูปภาพ
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImages((prevImages) => [...prevImages, ...newImages]);
    };

    // ลบรูปภาพ
    const handleRemoveImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!planName.trim() || !body.trim()) {
            setMessage("Fields must be contain!");
        } else {
            try {
                await axios.post("/plans", { planName, body });
                setMessage("Create Plan Successful");
                setPlanName("");
                setBody("");
                setImages([]);
            } catch (error) {
                console.error("Error creating plan:", error);
                setMessage("Failed to create plan!");
            }
        }
    };

    return (
        <div className="h-screen flex px-[10%]">
            {/* Sidebar */}
            <div className="w-64 bg-gray-900 text-white flex flex-col p-6">
                <div className="flex items-center space-x-2 mb-6">
                    <img src="/user.jpg" alt="Profile" className="w-12 h-12 rounded-full" />
                    <span className="text-lg font-semibold text-[20px]">Jannat</span>
                </div>
                <nav className="flex flex-col space-y-4 text-[20px]">
                    <Link to="/memberhomepage" className="p-3 hover:bg-gray-700 rounded">Dashboard</Link>
                    <Link to="/CreatePlanPage" className="p-3 hover:bg-gray-700 rounded">Create Plan</Link>
                    <Link to="/tables" className="p-3 hover:bg-gray-700 rounded">Tables</Link>
                </nav>
            </div>

            {/* Form Container ติด Sidebar */}
            <div className="flex-1 flex justify-start items-center bg-gray-100">
                <div className="w-full max-w-5xl bg-[#FEFEFE] p-10 rounded-md shadow-md">
                    <h2 className="text-2xl font-semibold mb-6 text-[30px] text-center">Create Plan</h2>

                    {message && <p className="mb-4 text-red-500 text-[20px] text-center">{message}</p>}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 text-[20px]">Plan Name Field</label>
                            <input
                                type="text"
                                value={planName}
                                onChange={(e) => setPlanName(e.target.value)}
                                className="w-full p-3 border rounded text-[20px]"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-[20px]">Body Paragraph Field</label>
                            <textarea
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                className="w-full p-3 border rounded h-40 text-[20px]"
                                required
                            />
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label className="block text-gray-700 text-[20px] flex items-center space-x-2">
                                <Upload size={28} className="text-gray-600" />
                                <span>Upload Image</span>
                            </label>
                            <input 
                                type="file" 
                                accept="image/*" 
                                multiple
                                onChange={handleImageUpload} 
                                className="w-full p-3 border rounded text-[20px]" 
                            />
                        </div>

                        {/* Preview Image */}
                        {images.length > 0 && (
                            <div className="grid grid-cols-3 gap-4 mt-6">
                                {images.map((image, index) => (
                                    <div key={index} className="relative">
                                        <img src={image} alt="Uploaded Preview" className="w-full h-40 object-cover rounded-md border" />
                                        <button 
                                            type="button" 
                                            onClick={() => handleRemoveImage(index)} 
                                            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-[#EB662B] text-white p-3 rounded-full w-1/4 text-[18px]"
                            >
                                SAVE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePlanForm;
