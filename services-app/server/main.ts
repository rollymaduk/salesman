import {loadChannels} from "./fixtures/channels";
/**
 * Created by rolly_000 on 7/8/2016.
 */
Meteor.startup(function(){
    loadChannels();
});