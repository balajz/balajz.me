---
title: Projects
display: Projects
description: List of projects that I am proud of
wrapperClass: 'text-center'
art: dots
projects:
  CLI & TUI Apps:
    - name: 'pgxcli'
      link: 'https://github.com/balajz/pgxcli'
      desc: 'Interactive PostgreSQL command-line client written in Go.'
      icon: 'i-simple-icons-postgresql'
    - name: 'meine'
      link: 'https://github.com/Balaji01-4D/meine'
      desc: 'A modern, regex-powered CLI file manager and system utility built with Textual.'
      icon: 'i-carbon-terminal'
    - name: 'cake'
      link: 'https://github.com/balajz/cake'
      desc: 'A lightweight, snappy TUI for Makefiles built with Bubble Tea.'
      icon: 'i-carbon-development'
    - name: 'my-doro'
      link: 'https://github.com/balajz/my-doro'
      desc: 'A sleek, modern Pomodoro timer for your terminal with customizable intervals and beautiful themes.'
      icon: 'i-carbon-timer'

  Full-Stack & Platforms:
    - name: 'my-dear-bug'
      link: 'https://github.com/balajz/my-dear-bug'
      desc: 'A modern, lightweight community-driven debugging platform built with Go and Gin.'
      icon: 'i-carbon-debug'
    - name: 'shop-near-u'
      link: 'https://github.com/balajz/shop-near-u'
      desc: 'A fullstack platform for local shop owners to list products and for customers to order, promoting local businesses over big delivery apps.'
      icon: 'i-carbon-shopping-cart'
    - name: 'ecoaware++'
      link: 'https://github.com/balajz/ecoaware-go'
      desc: 'A robust, production-grade complaint management system built with Go, Gin, and GORM.'
      icon: 'i-simple-icons-go'
    - name: 'ecoaware'
      link: 'https://github.com/balajz/ecoaware'
      desc: 'A secure, Spring Boot based complaint tracking system for campus environmental issues.'
      icon: 'i-simple-icons-springboot'

  AI Projects:
    - name: 'autocare-ai'
      link: 'https://github.com/balajz/autocare-ai'
      desc: 'An intelligent, full-stack automotive care platform with AI-powered diagnostics.'
      icon: 'i-carbon-car-front'
    - name: '911'
      link: 'https://github.com/balajz/911'
      desc: 'Emergency Response Prioritization System using LLaMA.'
      icon: 'i-carbon-warning'

  Developer Tools:
    - name: 'pgxls'
      link: 'https://github.com/balajz/pgxls'
      desc: 'An implementation of the Language Server Protocol exclusively for PostgreSQL.'
      icon: 'i-carbon-sql'

  Templates & Boilerplates:
    - name: 'go-auth-template'
      link: 'https://github.com/balajz/user-authentication-template-golang'
      desc: 'A minimal, production-friendly user authentication template for Go using Gin, Postgres, and JWT.'
      icon: 'i-carbon-security'
---

<!-- @layout-full-width -->
<ListProjects :projects="frontmatter.projects" />
