import React, {Component} from 'react';

class SearchBar extends Component {
    state = { mail: '' }

    onFormSubmit(e){
        e.preventDefault();
        this.props.onSubmit(this.state.mail);
    }

    onFormSearch(e){
        this.setState({
            mail: e.target.value
        }, () => this.props.onSearch())
    }

    render() {
        return (
            <div className={'ui segment'} style={{marginTop: '15px'}}>
                <form className={'ui form'} onSubmit={(e) => this.onFormSubmit(e)}>
                    <div className={'field'}>
                        <label htmlFor="txt_email"> Search for email </label>
                        <input
                            type="text"
                            id={'txt_email'}
                            className="field"
                            value={this.state.mail}
                            onChange={(e) => this.onFormSearch(e)}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
