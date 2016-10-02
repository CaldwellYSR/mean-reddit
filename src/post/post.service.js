angular.module("meanreddit").factory("postService", function() {
    var o = {
        posts: {
            "0":{
                title: "Hello, World",
                content: "Hey guys and gals, this is a test and I sure hope it works",
                upvotes: 0
            },
            "1": {
                title: "Light Speed",
                content: "How long before you can make the jump to light speed? It'll take a few moments to get the coordinates from the navi-computer. Are you kidding? At the rate they're gaining... Traveling through hyperspace isn't like dusting crops, boy! Without precise calculations we could fly right through a star or bounce too close to a supernova and that'd end your trip real quick, wouldn't it? What's that flashing? We're losing our deflector shield. Go strap yourself in, I'm going to make the jump to light speed.",
                upvotes: 1
            }
        },
        getPost: function(id) {
            return this.posts[id]
        }
    };
    return o;
});
