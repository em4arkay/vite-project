import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
    	path: '/',
    	name: 'home',
    	component: Home
	},
  	{
		path: '/personalinfo',
		name: 'personal',
		component: () => import('../views/PersonalInfo.vue')
	},
	{
		path: '/contactinfo',
		name: 'contact',
		component: () => import('../views/ContactInfo.vue')
	},
	{
		path: '/education',
		name: 'education',
		component: () => import('../views/Education.vue')
	},
	{
		path: '/work',
		name: 'work',
		component: () => import('../views/WorkExp.vue')
	},
	{
		path: '/skill',
		name: 'skill',
		component: () => import('../views/Skill.vue')
	},
	{
		path: '/other',
		name: 'other',
		component: () => import('../views/OtherInfo.vue')
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
