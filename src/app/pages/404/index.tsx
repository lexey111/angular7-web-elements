import React from 'react';

interface I404Props {
	history: any;
}

export class NotFoundComponent extends React.Component<I404Props> {
	constructor(public  props: I404Props) {
		super(props);
	}

	returnToMain() {
		this.props.history.push('/index');
	}

	render() {
		const page = window.location.pathname;
		return <React.Fragment>
			<div className='section-header'>PAGE 404</div>
			<div className='page-content'>
				<h1 className='error'>Unknown page: <span>{page}</span></h1>
				<p>It is a good idea to return to main page.</p>
				<p>
					<button className='press press-blue' onClick={this.returnToMain.bind(this)}>
						<i className='icon-home'></i>
						Go to main page
					</button>
				</p>
			</div>

		</React.Fragment>;
	}
}