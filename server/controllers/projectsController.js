const express = require('express')
const projectsController = {}

projectsController.index = (req, res) => {
  const projects = [{
    title: 'Exercise App',
    slug: 'dashboard',
    tags: ['html', 'css', 'javascript', 'php'],
    date: '12/3/2017',
    img: 'https://cdn.dribbble.com/users/1326405/screenshots/3897327/artboard_4_copy_4.png'
  },

  {
    title: 'Blog',
    slug: 'blog',
    tags: ['html', 'css', 'javascript', 'node'],
    date: '12/3/2017',
    img: 'https://cdn.dribbble.com/users/702789/screenshots/3897645/preview.png'
  },

  {
    title: 'Mobile',
    slug: 'mobile',
    tags: ['IOS', 'Swift'],
    date: '12/3/2017',
    img: 'https://cdn.dribbble.com/users/31752/screenshots/3899367/fox.png'
  },

  {
    title: 'Weird Science',
    slug: 'weird-science',
    tags: ['movie', '1980s'],
    date: '12/3/2017',
    img: 'https://cdn.dribbble.com/users/416805/screenshots/3896992/dribbble_06_dmp_weird-science.png'
  },

  {
    title: 'Space',
    slug: 'space',
    tags: ['3D', 'Art'],
    date: '12/3/2017',
    img: 'https://cdn.dribbble.com/users/623359/screenshots/3892437/space_exploration__4_in_1_part_2_-01.jpg'
  },

  {
    title: 'Fashion',
    slug: 'fashion',
    tags: ['3D', 'Art'],
    date: '12/3/2017',
    img: 'https://cdn.dribbble.com/users/1144153/screenshots/3897927/kopia_5.png'
  }
]

  var testingVar = process.env.DB_USERNAME

  res.render('projects/index', {
    projects: projects,
    testingVar: testingVar
  })
}

projectsController.create = (req, res) => {
  res.render('projects/create')
}

projectsController.store = (req, res) => {
  res.send({
    saved: true
  })
}

projectsController.show = (req, res) => {
  res.render('projects/show')
}

projectsController.edit = (req, res) => {
  res.render('projects/edit')
}

projectsController.update = (req, res) => {
  res.send({
    updated: true
  })
}

projectsController.destroy = (req, res) => {
  res.send({
    deleted: true
  })
}

module.exports = projectsController
