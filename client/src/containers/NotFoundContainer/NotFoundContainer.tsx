import { FloatingCard, SpCardTitle, SpLink } from 'common';
import { withNavigation } from 'hoc';
import React, { Component } from 'react';
import { QuestionIcon } from './QuestionIcon';

@withNavigation
class NotFoundContainerComponent extends Component<any> {
    gotoSignIn = () => {
        const { navigateTo } = this.props;
        navigateTo('/signin/credentials');
    };

    render() {
        return (
            <div className={this.props.className}>
                <FloatingCard>
                    <div>
                        <QuestionIcon />
                    </div>
                    <div>
                        <SpCardTitle>Oops!</SpCardTitle>
                        <h2>We can't seem to find the page you're looking for.</h2>
                        <h6>(Error code: 404)</h6>
                        <p className="grow">
                        </p>
                        <div>
                            You can go {' '}
                            <SpLink onClick={this.gotoSignIn}>back to sign-in</SpLink>
                        </div>
                    </div>
                </FloatingCard>
            </div>
        );
    }
}

export const NotFoundContainer = ({ className }): any => (<NotFoundContainerComponent className={className} />
);
