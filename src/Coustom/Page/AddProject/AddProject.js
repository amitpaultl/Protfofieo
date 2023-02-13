import React from 'react';
import { toast } from 'react-hot-toast';

const AddProject = () => {

    const handelsubmit = (e) => {
        e.preventDefault()
        const common = e.target;
        const name = common.name.value;
        const client = common.client.value;
        const start = common.start.value;
        const end = common.end.value;
        const status = common.status.value;
        const live = common.live.value;
        const server = common.server.value;
        const clientc = common.clientc.value;
        const deities = common.message.value;
        const image1 = common.image1.files[0];
        const formData = new FormData();
        formData.append('image', image1);
        const url = `https://api.imgbb.com/1/upload?key=9b886ea0069808da69e30cf31f29ca72`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(image => {
                if (image.success) {
                    const project = {
                        name, client, start, end, status, live, server, clientc, image:image.data.display_url,deities
                    }
                    fetch(`https://server-three-fawn.vercel.app/project`, {
                        method: 'PUT',
                        headers: {

                            'content-type': 'application/json',
                            
                        },
                        body: JSON.stringify(project)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success(data.message)
                            
                        })
                }
            })


    }

    return (
        <div>
            <div className="container mx-auto py-20">
                <form onSubmit={handelsubmit}>

                    <div className=" gap-8 text-black grid  md:grid-cols-2 sm:grid-cols-1">
                        <div className="input-box">
                            <input type="text" name='name' placeholder="Name" className="input input-bordered input-primary w-full " />
                        </div>
                        <div className="input-box">
                            <input type="text" name='client' placeholder="Client name " className="input input-bordered input-primary w-full " />
                        </div>
                        <div className="input-box">
                            <input type="text" name='start' placeholder="Start Date " className="input input-bordered input-primary w-full " />
                        </div>
                        <div className="input-box">
                            <input type="text" name='end' placeholder="End Date" className="input input-bordered input-primary w-full " />
                        </div>
                        <div className="input-box">
                            <input type="text" name='status' placeholder="Status" className="input input-bordered input-primary w-full " />
                        </div>
                        <div className="input-box">
                            <input type="text" name='live' placeholder="Live Side" className="input input-bordered input-primary w-full " />
                        </div>
                        <div className="input-box">
                            <input type="text" name='server' placeholder="Server code" className="input input-bordered input-primary w-full " />
                        </div>
                        <div className="input-box">
                            <input type="text" name='clientc' placeholder="Client Code" className="input input-bordered input-primary w-full " />
                        </div>
                        <div className="input-box">
                            <textarea className="w-full textarea textarea-accent" placeholder="Project Deities" name="message" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="input-box">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-white">First img</span>

                                </label>
                                <input type="file" name='image1' className="file-input file-input-bordered w-full max-w-xs" />

                            </div>
                           
                        </div>

                    </div>
                    <div className="text-center">
                        <button className="btn btn-success my-10" type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProject;