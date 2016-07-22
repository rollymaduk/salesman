import {Channels} from "../../collections/channels";
import {Meteor} from "meteor/meteor";
/**
 * Created by rolly_000 on 7/7/2016.
 */
let channels:Channel[]=[{
    name:"Channel-1",
    description:"Channel-1 description",
},{
    name:"Channel-2",
    description:"Channel-2 description",
},{
    name:"Channel-3",
    description:"Channel-3 description",
}];

export function loadChannels(){
    Meteor.startup(function(){
            for(let channel of channels){
                if(Channels.find().count()<1){
                    Channels.insert(channel);
                }
            }
      });

}
