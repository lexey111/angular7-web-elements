import React from 'react';
import {CSSTransitionGroup} from 'react-transition-group';

export const AnimatedWrapper = WrappedComponent => class AnimatedWrapper extends React.Component {
	protected props;

	render() {
		return <React.Fragment>
			<CSSTransitionGroup
				transitionName='page'
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionEnter={false}
				transitionLeave={false}>
				<div>
					<WrappedComponent {...this.props} />
				</div>
			</CSSTransitionGroup>
		</React.Fragment>;
	}
};