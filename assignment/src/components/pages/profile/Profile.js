import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/person1.jpg';

export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='Yashwanth Sai' />
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
						Yashwanth Sai
					</span>
					<p>Full Stack Web Developer(fresher)</p>
				</div>
			</div>
		</div>
	);
}
