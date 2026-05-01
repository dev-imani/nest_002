import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return [{ username: 'John Doe', email: 'john.doe@example.com' }];
  }
  getUsersPosts() {
    return [
      {
        username: 'John Doe',
        email: 'john.doe@example.com',
        posts: [
          { id: 1, title: 'First Post', content: 'This is the first post' },
          { id: 2, title: 'Second Post', content: 'This is the second post' },
        ],
      },
    ];
  }

  getUsersPostsComments() {
    return [
      {
        id: 1,
        title: 'First Post',
        content: 'This is the first post',
        comments: [
          { id: 1, content: 'Great post!' },
          { id: 2, content: 'Thanks for sharing!' },
        ],
      },
    ];
  }
  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
