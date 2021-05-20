<template>
  <div id="app">
    <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User ID
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <!-- <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th> -->
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <!-- currentUser -->
              <tr v-for="post in posts" :key="post.userId">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="../assets/img/user-1.jpeg" alt="" />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ currentUser.username }}
                      </div>
                      <!-- <div class="text-sm text-gray-500">
                        {{ person.email }}
                      </div> -->
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900" >{{ post.content }}</div>
                  <!-- <div class="text-sm text-gray-500">{{ person.department }}</div> -->
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {{ currentUser.id }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ post.id }}
                </td>
                <!-- <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td> -->
              </tr>

              <!-- secondUser -->
              <tr v-for="post in secondposts" :key="post.userId">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="../assets/img/user-2.jpg" alt="" />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ secondUser.username }}
                      </div>
                      <!-- <div class="text-sm text-gray-500">
                        {{ person.email }}
                      </div> -->
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900" >{{ post.content }}</div>
                  <!-- <div class="text-sm text-gray-500">{{ person.department }}</div> -->
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {{ secondUser.id }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ post.id }}
                </td>
                <!-- <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td> -->
              </tr>

              <!-- thirdUser -->
              <tr v-for="post in thirdposts" :key="post.userId">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="../assets/img/user-3.jpg" alt="" />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ thirdUser.username }}
                      </div>
                      <!-- <div class="text-sm text-gray-500">
                        {{ person.email }}
                      </div> -->
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900" >{{ post.content }}</div>
                  <!-- <div class="text-sm text-gray-500">{{ person.department }}</div> -->
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {{ thirdUser.id }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ post.id }}
                </td>
                <!-- <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td> -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="space-y-4">
      <button @click="addPost()">Add Post</button>
       <input v-model="newPostContent" />
    </div>
    <!-- <p class="username">{{ currentUser.username }}'s posts:</p> -->
  </div>
</template>

<script>
import gql from "graphql-tag";

const CURRENT_USER = gql`
  query {
    currentUser {
      id
      username
    }
  }
`;

const SECOND_USER = gql`
  query {
    secondUser {
      id
      username
    }
  }
`;

const THIRD_USER = gql`
  query {
    thirdUser {
      id
      username
    }
  }
`;

const POSTS_BY_USER = gql`
  query($userId: String!) {
    postsByUser(userId: $userId) {
      id
      content
    }
  }
`;

const ADD_POST = gql`
  mutation($content: String!) {
    addPost(content: $content) {
      id
      content
    }
  }
`;

function updateAddPost(cache, result) {
  let newPost = result.data.addPost;

  console.log(newPost.id);

  let cacheId = {
    query: POSTS_BY_USER,
    variables: { userId: this.currentUser.id }
  };

  const data = cache.readQuery(cacheId);
  const newData = [...data.postsByUser, newPost];

  cache.writeQuery({
    ...cacheId,
    data: { postsByUser: newData }
  });
}

export default {
  name: "app",
  data: function() {
    return {
      currentUser: { username: "user" },
      secondUser: { username: "seconduser" },
      thirdUser: { username: "thirduser" },
      posts: [],
      newPostContent: ""
    };
  },

  methods: {
    addPost() {
      this.$apollo.mutate({
        mutation: ADD_POST,
        variables: { content: this.newPostContent },
        update: updateAddPost.bind(this),

        // NEW
        optimisticResponse: {
          __typename: "Mutation",
          addPost: {
            __typename: "Post",
            id: "xyz-?",
            content: this.newPostContent,
            userId: this.currentUser.id
          }
        }
      });

      this.newPostContent = "";
    }
  },

  apollo: {
    currentUser: CURRENT_USER,
    secondUser: SECOND_USER,
    thirdUser: THIRD_USER,
    posts: {
      query: POSTS_BY_USER,
      variables() {
        return { userId: String(this.currentUser.id) };
      },
      update(data) {
        return data.postsByUser;
      }
    },
    secondposts: {
      query: POSTS_BY_USER,
      variables() {
        return { userId: String(this.secondUser.id) };
      },
      update(data) {
        return data.postsByUser;
      }
    },
    thirdposts: {
      query: POSTS_BY_USER,
      variables() {
        return { userId: String(this.thirdUser.id) };
      },
      update(data) {
        return data.postsByUser;
      }
    }
  }
};
</script>
