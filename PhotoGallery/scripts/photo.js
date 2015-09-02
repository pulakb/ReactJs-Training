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


React.render(<Photo src="http://photos-b.ak.instagram.com/hphotos-ak-xfa1/t51.2885-15/10853090_395670790609953_769522691_n.jpg" caption="Building" />, document.body);