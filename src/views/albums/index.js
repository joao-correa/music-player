import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AlbumArt from '../../components/album-art-simple';
import services from '../../services';
import './index.css';


const Albums = () => {
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		const fetchAlbums = async () => {
				const albums = await services.albums.recomendation();
				setAlbums(albums);
		};

		fetchAlbums();
	}, []);

	const albumsComponents = albums.map(album => {
		return (
			<div className="d-inline-block" key={album.id}>
				<Link to={`/player/${album.id}`} className='link-color'>
					<AlbumArt album={album}/>
				</Link>
			</div>
		)
	});

	return (
		<div className="almbum-container d-flex justify-content-center">
			<div className='albums'>
				<div>
					<h1 className='text-center header-albums py-2'>
						Albums
					</h1>
				</div>
				<div className=''>
					{ albumsComponents }
				</div>
			</div>
		</div>
	);
};

// class Albums extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			albums: [],
// 		};
// 	}

// 	async componentDidMount(){
// 		const albums = await services.albums.recomendation();
// 		this.setState({ albums });
// 	}

// 	render(){
// 		return (
// 			<div className="almbum-container d-flex justify-content-center">
// 				<div className='albums'>
// 					<div>
// 						<h1 className='text-center header-albums py-2'>
// 							Albums
// 						</h1>
// 					</div>
// 					<div className=''>
// 						{
// 							this.state.albums.map(a => {
// 								return (
// 									<div className="d-inline-block" key={a.id}>
// 										<Link to={`/player/${a.id}`} className='link-color'>
// 											<AlbumArt album={a}/>
// 										</Link>
// 									</div>
// 								)
// 							})
// 						}
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

export default Albums;
