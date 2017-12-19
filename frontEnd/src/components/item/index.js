import React from 'react';
import Center from '../common/center';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-xs-6 pull-left">
          <Center>
            <img className="center-block" src={'https://i.pinimg.com/736x/92/cb/cf/92cbcfa2a59b516f3d70a1a97f774d4a--craft-ideas-decorating-ideas.jpg'} />
          </Center>
        </div>
        <div className="col-md-5 col-xs-5 pull-right">
          <div className="col-md-11 col-xs-11">
            <h2 className="text-center"> This is my title </h2>
            <div className="well well-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type 
                 specimen book. It has survived not only five centuries, but also the leap 
                 into electronic typesetting, remaining essentially unchanged. It was popularised 
                 in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                 and more recently with desktop publishing software like Aldus PageMaker including 
                 versions of Lorem Ipsum.
            </div>
          </div>
          <button className="btn btn-primary col-md-5 col-xs-5 col-md-offset-2 col-md-offset-2">Add to Cart</button>
          <div className="col-md-3 col-xs-5">
            <input className="form-control form-inline" type="number" min="0"/>
          </div>
        </div>
      </div>
    );
  }
}