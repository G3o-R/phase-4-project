# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "seeding..."

Job.create!([
    {
      description: "Software Engineer",
      pay: 80000.0,
      location: 37.7749,
      position: "Full Stack",
      company: "TechCo"
    },
    {
      description: "Graphic Designer",
      pay: 50000.0,
      location: 34.0522,
      position: "UI/UX",
      company: "DesignHub"
    },
    {
      description: "Marketing Manager",
      pay: 70000.0,
      location: 40.7128,
      position: "Marketing",
      company: "AdAgency"
    },
    {
      description: "Data Analyst",
      pay: 60000.0,
      location: 41.8781,
      position: "Analytics",
      company: "DataCorp"
    },
    {
      description: "Sales Representative",
      pay: 55000.0,
      location: 39.9526,
      position: "Sales",
      company: "SalesCo"
    },
    {
      description: "Product Manager",
      pay: 75000.0,
      location: 36.7783,
      position: "Product",
      company: "ProductTech"
    },
    {
      description: "Content Writer",
      pay: 45000.0,
      location: 33.6846,
      position: "Content",
      company: "ContentCo"
    }
  ])
  

  puts "done seeding..."