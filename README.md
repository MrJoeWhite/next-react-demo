初始化项目

    mkdir next-react
	cd next-react
	npm init -y
	mkdir pages
	npm install --save react react-dom next

默认取 pages/index.js 作为系统的首页进行展示  
pages 是默认存放页面的目录，路由的根路径也是pages目录
只要不想让用户通过页面直接访问的组件，都不放在pages目录下

使用到 next/link 组件的 as 属性，并给组件添加一个属性，实现客户端的路由遮盖。  
但是会出现刷新页面404，所以要在服务端配置。
#####build 命令是用于打包项目，
#####start 命令是用于生产环境部署，
#####dev 命令是用于本地开发。
### 执行如下命令即可将 Next项目 部署到服务器：  
#####$ npm run build
#####$ npm run start  
####执行完命令后，可在 http://host:3000 访问。  
其中，host 是指服务器的IP地址。