import React, { Component } from 'react'
import './Item.css'

class Item extends Component {
	render() {
		return (
			<div className="col s12 m4 l2">
					<div className="card">
						<div className="card-image">
							<img alt="Interestelar" src="https://i2.wp.com/www.coconacuia.com.br/wp-content/uploads/2015/03/interstellar-movie-poster.jpg"/>
							<span className="card-title">Interestelar</span>
						</div>
					</div>
			</div>
			)
	}
}

export default Item