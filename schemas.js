import {ObjectId} from 'bson';

class Link {
  constructor({
    name,
    url,
    partition,
    id = new ObjectId(),
  }) {
    this._partition = partition;
    this._id = id;
    this.name = name;
    this.url = url;
  }

  static schema = {
    name: 'Link',
    properties: {
      _id: 'objectId',
      _partition: 'string',
      name: 'string',
      url: 'string',
    },
    primaryKey: '_id',
  };
}

export {Link};
