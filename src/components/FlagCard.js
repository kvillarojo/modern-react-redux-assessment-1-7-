import React from 'react'

export const FlagCard = props => {
    const {countryCode, content} = props.userDetails[0];
    return (
        <div className="ui cards">
            <div className="card">
                <div className={'content'}>
                    {props.children}
                </div>
                <div className={'extra content'}>
                    <div className="ui container">
                        <div className="ui grid">
                            <div className="four wide column">
                                <img src={`https://www.countryflags.io/${countryCode}/shiny/64.png`}/>
                            </div>
                            <div className="twelve wide column">
                                {content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

