import { IonIcon } from '@ionic/react';
import { image, mail, person, eye, eyeOff } from 'ionicons/icons';
import { Form, Link, redirect, useOutletContext } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';

function RegisterForm() {
    const [showPass, setShowPass] = useOutletContext();

	return (
		<div className="w-full">
			<h2 className="text-responsive-2xl text-white text-center mb-6">Registration</h2>
			<Form
				action="#"
				id="signupForm"
				method="POST"
				encType="multipart/form-data"
				className="space-y-4"
			>
				<div className="relative">
					<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
                        <IonIcon icon={person} />
					</span>
					<input 
						id="fnameInput" 
						name="firstname" 
						type="text" 
						required 
						className="input-netflix pl-10"
						placeholder="First Name"
					/>
				</div>

				<div className="relative">
					<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
                        <IonIcon icon={person} />
					</span>
					<input 
						id="lnameInput" 
						name="lastname" 
						type="text" 
						required 
						className="input-netflix pl-10"
						placeholder="Last Name"
					/>
				</div>

				<div className="relative">
					<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
                        <IonIcon icon={person} />
					</span>
					<input
						id="usernameInput"
						name="username"
						type="text"
						required
						className="input-netflix pl-10"
						placeholder="Username"
					/>
				</div>

				<div className="relative">
					<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
                        <IonIcon icon={mail} />
					</span>
					<input 
						id="emailInput" 
						name="email" 
						type="email" 
						required 
						className="input-netflix pl-10"
						placeholder="Email"
					/>
				</div>

				<div className="relative">
					<span 
						className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer z-10 hover:text-purple-400 transition-colors duration-300" 
						onClick={() => setShowPass(!showPass)}
					>
                        {showPass ? <IonIcon icon={eyeOff} /> :  <IonIcon icon={eye} />}
					</span>
					<input 
						id="pInput" 
						name="password" 
						type={showPass ? "password" : "text"} 
						required 
						className="input-netflix pr-10"
						placeholder="Password"
					/>
				</div>

				<div className="relative">
					<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
                        <IonIcon icon={image} />
					</span>
					<input
						id="profileImageInput"
						name="profileImage"
						type="file"
						accept="image/*"
						className="input-netflix pl-10"
					/>
				</div>

				<div className="flex items-center text-sm">
					<label className="flex items-center text-gray-300">
						<input 
							type="checkbox" 
							required 
							className="mr-2 bg-purple-900/50 border-purple-500 rounded focus:ring-purple-500"
						/>
						I agree to the terms and conditions
					</label>
				</div>

				<button type="submit" className="btn-primary w-full">
					Register
				</button>
				<div className="text-center text-gray-300 mt-4">
					<p>
						Already have an account?{' '}
						<Link to="/login" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
							Login
						</Link>
					</p>
				</div>
			</Form>
		</div>
	);
}

export const registerAction = async (res) => {
    const formData = await res.request.formData();
    const {firstname, lastname, username, email, password, profileImage} = Object.fromEntries(formData);
    try{
        await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}auth/signup`,
            {
                firstname,
                lastname,
                username,
                email,
                password,
                profileImage,
            },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        
        toast.success(`${firstname} ${lastname} has been registered! Kindly login!`, {
            theme: "dark",
            position: "bottom-right"
        });

        return redirect("/login");
    }
    catch(err){
        return console.error(err);
    }
    
}

export default RegisterForm;
