import React,{Component} from "react";
import "./Profile.css";
import Header from '../../common/header/Header';
import Typography from '@material-ui/core/Typography';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    componentWillMount() {
        let that = this;
        let dataShows = null;
        let xhrShows = new XMLHttpRequest();
        xhrShows.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                let response = JSON.parse(this.responseText);
                /*that.setState({ originalShows: response.shows });
                let newLocations = [];

                for (let show of response.shows) {
                    newLocations.push({ id: show.theatre.city, location: show.theatre.city });
                }

                newLocations = newLocations.filter((loc, index, self) =>
                    index === self.findIndex((c) => (
                        c.id === loc.id
                    ))
                )

                that.setState({ locations: newLocations })*/
            }
        })

        //https://graph.instagram.com/me/media?fields=id,caption&access_token=YourAccessToken
        xhrShows.open("GET", this.props.baseUrl + "me/media?fields=id,caption&access_token=" +"IGQVJXTzF5NUdqT0FtUmRrd0lKaTBzTjF3QWVrSnZAIRXFYXzN5cmRaT2Y2Y1dydmhjLTlQNjhwSE52OVNwSjVRc05Bc1d4WnVsSjZA5bDlIRkZAqMlh5cmk5UFVfRnZA1d3RVc191a1hJc3lUZAWU2NFh6VwZDZD");
        xhrShows.setRequestHeader("Cache-Control", "no-cache");
        //xhrShows.send(dataShows);

    }

    render(){
        return(
            <div>
                <Header heading ="Image Viewer"/>

                
            </div>
            )
        }
    }

 export default Profile;   
    