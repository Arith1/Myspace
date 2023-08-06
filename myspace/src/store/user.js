import $ from 'jquery';
import jwt_decode from 'jwt-decode';
// 引入解码JWT

const ModuleUser = {
    state: {
        username: "",
        id: "",
        photo: "",
        followerCount: 0,
        access: "",
        refresh: "",
        is_login: false,
    },
    getters: {
        fullName(state) {
            return state.user.firstName + state.user.lastName;
        }
    }, mutations: {
        // 执行直接对state修改操作，并且不能执行异步操作
        updateUser(state, user1) {
            state.id = user1;
            state.username = user1.username;
            state.photo = user1.photo;
            state.followCount = user1.followCount;
            state.access = user1.access;
            // access每五分钟过期
            state.refresh = user1.refresh;
            state.is_login = user1.is_login;

        },
        updateAccess(state, access1) {
            // 更新access
            state.access = access1;
        },
        logout(state){
            state.id = "";
            state.username = "";
            state.id= "";
            state.photo= "";
            state.followerCount= 0;
            state.access= "";
            state.refresh= "",
            state.is_login= false;
        }
    }, actions: {
        // 对state中的各种复杂操作

        login(context, data) {
            // 从外面调用ajax要用dispatch调用
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/api/token/",
                type: "POST",
                data: {
                    username: data.username,
                    password: data.password,
                },
                success(resp) {
                    // console.log(resp);
                    const { access, refresh } = resp;
                    // 获取access和refresh后可以对token解码得到用户名和密码
                    const access_obj = jwt_decode(access);
                    // console.log(access_obj,refresh);

                    setInterval(() => {
                        $.ajax({
                            url: "https://app165.acapp.acwing.com.cn/api/token/refresh/",
                            type: "POST",
                            data: {
                                refresh,
                            },
                            success(resp) {
                                //   console.log(resp);
                                context.commit('updateAccess', resp.access);
                                //   执行muta里的updateAccess
                            }
                        });
                    }, 4.5 * 60 * 1000);

                    $.ajax({
                        url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
                        type: "GET",
                        data: {
                            user_id: access_obj.user_id,
                        },
                        headers: {
                            'Authorization': "Bearer " + access,
                            // JWT验证
                        },
                        success(resp) {
                            // console.log(resp);
                            context.commit("updateUser", {
                                ...resp,
                                acess: access,
                                refresh: refresh,
                                is_login: true,
                            });//成功获取执行更新
                            data.success();
                            //调用loginview里的success函数
                        },
                    })
                },error() {
                    data.error();
                    //用户名密码或账号错误
                }

            });
        },
        // logout(){logout逻辑不复杂所以可以写到mutations里
            
        // }
    }, modules: {

    }
};

export default ModuleUser;