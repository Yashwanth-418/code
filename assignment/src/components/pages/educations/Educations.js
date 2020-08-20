import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>Institute/School</th>
								<th>Course</th>
								<th>Year</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>B.Tech (ECE)</td>
								<td>Sri Indu Institute of Engg and Tech</td>
								<td>2020</td>
							</tr>
							<tr>
								<td>Inter(MPC)</td>
								<td>Sahithi jr college</td>
								<td>2016</td>
							</tr>
							<tr>
								<td>SSC</td>
								<td>Suryapet high School</td>
								<td>2014</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>Projects</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>Projects</th>
								<th>Title</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Major-Project</td>
								<td>Intruder Detecter</td>
							</tr>
							<tr>
								<td>Mini-Project</td>
								<td>Review of 5-stage pipelining</td>
							</tr>
							<tr>
								<td>Internship</td>
								<td>EFID based attendance system</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
