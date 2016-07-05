/**
 * Created by rolly_000 on 6/27/2016.
 */
 interface tdObject{
  verify(params:any):any;
  object(params:any):any;
  replace(params:any):any;
  when(params:any):any;
}
 declare module "testdouble"{
  export = tdObject
}