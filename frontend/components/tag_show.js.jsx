import React from 'react';

var TagShow = React.createClass ({

  componentDidMount: function(){
    TagStore.addChangeListener(this._changed);

    ApiUtil.fetchTag(this.props.params.tagName);
  },

  componentWillReceiveProps: function(newProps){
    ApiUtil.fetchTag(newProps.params.tagName);
  },

  componentWillUnmount: function(){
    TagStore.removeChangeListener(this._changed);
  },

  _changed: function(){
    this.setState({tags: TagStore.all()});
  },

  render: function(){
    var tagPosts;
    var tagHeader;
    if (this.state){
        tagHeader = <UserHeader curUser={this.state.tags}/>;
        tagPosts = <PostGrid posts={this.state.tags.posts}/>;
    }
    return <div>
            <div className = "user-container">
              {tagHeader}
              {tagPosts}
            </div>
          </div>;
  }
});

export default TagShow;