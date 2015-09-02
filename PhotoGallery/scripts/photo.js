var Photo = React.createClass({

    toggleLiked: function () {
        this.setState({
           liked: !this.state.liked
        });
    },

    getInitialState: function () {
        return {
          liked: false
        };
    },

    render: function () {

        var buttonClass = this.state.liked ? 'active' : '';

        return (
            <div className='photo'>
                <img src={this.props.src} />
                <div className='bar'>
                    <button onClick={this.toggleLiked} className={buttonClass}>
                    Like
                    </button>
                    <span>{this.props.caption}</span>
                </div>
            </div>
        );
    }
});

var PhotoGallery = React.createClass({
    render: function () {
        var photos = this.props.photos.map(function (photo) {
            return <Photo src={photo.url} caption={photo.caption} />
        });

        return (
            <div className='photo-gallery'>
            {photos}
            </div>
        );
    }
});

var data = [
    {
        url: 'http://photos-b.ak.instagram.com/hphotos-ak-xfa1/t51.2885-15/10853090_395670790609953_769522691_n.jpg',
        caption: 'Hong Kong!'
    },
    {
        url: 'http://photos-e.ak.instagram.com/hphotos-ak-xaf1/t51.2885-15/10852852_357115861137756_207463750_n.jpg',
        caption: 'Cows'
    },
    {
        url: 'http://photos-c.ak.instagram.com/hphotos-ak-xaf1/t51.2885-15/10832107_406647066158250_128485237_n.jpg',
        caption: 'Scooters'
    }
];

React.render(<PhotoGallery photos={data} />, document.body);