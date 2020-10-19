import React,{Component} from "react";
import "./Home.css";
import Header from '../../common/header/header';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Moment from 'moment';

class Home extends Component {
    constructor(){
        super();

        this.state = {
            allInsta: [],
            allPostDetails: []
        }
    }

    componentWillMount() {   
        // Get all post from insta account
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
              console.log(JSON.parse(this.responseText).data );
                that.setState({
                    allInsta:JSON.parse(this.responseText).data                   
                });
               that.fetchPostDetails(JSON.parse(this.responseText).data);
            }
        });

        xhr.open("GET", this.props.baseUrl + "me/media?fields=id,caption&access_token=" +sessionStorage.getItem("access-token"));
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.send(data);
       }

       fetchPostDetails = (apiResponse) => {
        let thisThat = this;
        let arrayOfDetails = [];
        for(let newPostdetail of apiResponse){
            console.log("Hiiiiii");
            console.log(newPostdetail.id);
            let dataPost = null;
        let xhrPostDetails = new XMLHttpRequest();
        
        xhrPostDetails.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                let secondApiRespnse = JSON.parse(this.responseText);
                let captionTitle = "";
                let captionTags = "";
                let originalCaption = (newPostdetail.caption);
                if(originalCaption!=null){
                captionTitle = originalCaption.substr(0, originalCaption.indexOf('#'));
                captionTags = originalCaption.substr(originalCaption.indexOf('#')+0);
                }
                arrayOfDetails.push({id: newPostdetail.id, caption: captionTitle, tags: captionTags, username: secondApiRespnse.username, imageUrl: secondApiRespnse.media_url, timeStamp: secondApiRespnse.timestamp});
                thisThat.setState({
                    allPostDetails: arrayOfDetails
                });
                console.log(arrayOfDetails);
            }
        });

        xhrPostDetails.open("GET", this.props.baseUrl +newPostdetail.id+"?fields=id,media_type,media_url,username,timestamp&access_token=" + sessionStorage.getItem("access-token"));
        xhrPostDetails.setRequestHeader("Cache-Control", "no-cache");
        xhrPostDetails.send(dataPost);
        }
        
        

    }

    render(){

        return(
            <div>
                <Header heading ="Image Viewer" searchIcon={true} history={this.props.history}/>
                <div id="imageCardsContainer">
                    
                    {this.state.allPostDetails.map(instaPost => (
                        <Card className="imageCard">
                            <CardHeader avatar={
                                <Avatar aria-label="recipe" className="pofileIcon"> 
                                </Avatar>
                                }
                                action={
                                <IconButton aria-label="settings">
                                  
                                </IconButton>
                                }
                                title={instaPost.username}
                                subheader={Moment(new Date(instaPost.timeStamp)).format('DD/MM/YYYY HH:MM:SS')} 
                            />
                            <CardContent>                            
                            <img src={instaPost.imageUrl}></img>
                            <hr></hr>
                            <h3>{instaPost.caption}</h3>
                            <p>{instaPost.tags}</p>
                            </CardContent>
                            
                        </Card>
                        
                    ))}
                    
                    
                </div>
 
                
            </div>
            )
        }
    }

 export default Home;   
    