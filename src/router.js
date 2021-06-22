/*
VUE App's MAIN Component.
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';

import Vue from 'vue'
import Router from 'vue-router';
Vue.use(Router);

import Home from '@/routes/Home.vue'
import About from '@/routes/About.vue'
import HostLogin from '@/routes/HostLogin.vue'
import Player from '@/routes/Player.vue'
import Board from '@/routes/Board.vue'
import Editor from '@/routes/Editor.vue'

export default new Router({
    routes: [
        { path: "/", name: "Home", component: Home, props: { name: "Game Show Demo App" } },
        //{ path: "/about", name: "About", component: About },
        { path: "/host", name: "Host", component: HostLogin, props: { name: "Host" } },
        { path: "/player", name: "Player", component: Player, props: { name: "Player" } },
        { path: "/Board", name: "Board", component: Board, props: { name: "Board" } },
        { path: "/Editor", name: "Editor", component: Editor, props: { name: "Editor" } }
    ]
});