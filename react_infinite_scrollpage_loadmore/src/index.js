import React, {Component} from 'react';
import ReactDom from 'react-dom';
import InfiniteScroll from 'react-infinite-scroller';
import qwest from 'qwest';

const imageList = [];
const api = {
    baseUrl: 'https://api.soundcloud.com',
    client_id: 'caf73ef1e709f839664ab82bef40fa96'
};

class App extends Component{

    constructor(props) {
        super(props);
        
        this.state = {
            tracks: [],
            hasMoreItems: true,
            nextHref: null
        }
    }

    loadItems(){
        var _this = this;

        var url = api.baseUrl + '/users/8665091/favorites';
        if(this.state.nextHref){
            url = this.state.nextHref;
        }

        qwest.get(url, {
            client_id: api.client_id,
            linked_partitioning: 1,
            page_size: 2
        },{
            cache: true
        })
        .then(function(xhr, resp){

            console.log('resp: ', resp);

            var tracks = _this.state.tracks;
            if(resp){
                var tracts = _this.state.tracks;
                resp.collection.map((track) => {
                    if(track.artwork_url === null){
                        track.artwork_url = track.user.avatar_url;
                    }

                    tracks.push(track);

                    if(resp.next_href){
                        _this.setState({
                            tracks: tracks,
                            nextHref: resp.next_href
                        })
                    }
                    else{
                        _this.setState({
                            hasMoreItems: false
                        })
                    }
                })
            }
        })
        ;
    }

    render(){
        const loader = <div className="loader">Loading ...</div>;
        let items = [];
        this.state.tracks.map((track, i) => {
            items.push(
                <div className="track" key={i}>
                    <a href={track.permalink_url} target="_blank">
                        <img src={track.artwork_url} width="150" height="150" />
                        <p className="title">{track.title}</p>
                    </a>
                </div>
            );
        });

        return(
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={this.state.hasMoreItems}
                loader={loader}
            >
                <div className="tracks">
                    {items}
                </div>
            </InfiniteScroll>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)