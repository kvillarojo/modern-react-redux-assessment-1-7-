import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import {FlagCard} from "./FlagCard";
import faker from 'faker';
import {UserDetails} from "./UserDetails";
import {Spinner} from "./Spinner";

class App extends Component {
    state = {
        users: [],
        isSearching: false,
        user: []
    }

    onSearchSubmit(email){
        const user = this.state.users.filter((e) => e.email === email)
       if(user.length !== 0){
           this.setState({user})
       }else{
           this.setState({user: []})
       }
       this.setState({isSearching: false})
    }

    generateUsers() {
        let x = 0, items = [];

        while(x < 10 ){
            items.push({
                email: faker.internet.email(),
                jobTitle: faker.name.jobTitle(),
                avatar: faker.image.avatar(),
                content: faker.lorem.sentence(),
                countryCode: faker.address.countryCode()
            })
            x++;
        }
        console.log(items);
        this.setState({users: items})
    }

    onGetUser(){
        const {user, isSearching} = this.state

        if (isSearching){
            return (<Spinner/>)
        }else if(user.length !== 0){
            return (
                <FlagCard userDetails={user}>
                    <UserDetails userDetails={user}/>
                </FlagCard>
            )
        }else{
            return (
                <div>No Result</div>
            )
        }
    }

    componentDidMount(){
        this.generateUsers();
    }

    render () {
        return (
            <div className={'ui container'}>
                <SearchBar
                    onSubmit={(e) => this.onSearchSubmit(e)}
                    onSearch={() => this.setState({isSearching: true})}
                />
                {this.onGetUser()}
            </div>
        );
    }
}

export default App;
