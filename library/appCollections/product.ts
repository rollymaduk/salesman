/**
 * Created by rolly_000 on 7/6/2016.
 */
import {Mongo} from "meteor/mongo";
export const Products=new Mongo.Collection<Product>("products");
if(Meteor.isServer)
{
    Products.allow({
        insert:(userId,doc)=>{
            return true;
        },
        update:(userId,doc,fields,mod)=>{
            return true
        },
        
        remove:(userId,doc)=>{
            return true
        },
        fetch:['owner']
    });
}

