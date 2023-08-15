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
    company: "TechCo",
    about_the_job: "We're looking for an experienced software engineer to join our dynamic team..."
  },
  {
    description: "Graphic Designer",
    pay: 50000.0,
    location: 34.0522,
    position: "UI/UX",
    company: "DesignHub",
    about_the_job: "DesignHub is seeking a talented graphic designer to create visually stunning..."
  },
  {
    description: "Marketing Manager",
    pay: 70000.0,
    location: 40.7128,
    position: "Marketing",
    company: "AdAgency",
    about_the_job: "AdAgency is in search of a skilled marketing manager to lead our promotional efforts..."
  },
  {
    description: "Data Analyst",
    pay: 60000.0,
    location: 41.8781,
    position: "Analytics",
    company: "DataCorp",
    about_the_job: "DataCorp is hiring a data analyst to analyze and interpret complex datasets..."
  },
  {
    description: "Sales Representative",
    pay: 55000.0,
    location: 39.9526,
    position: "Sales",
    company: "SalesCo",
    about_the_job: "SalesCo needs a motivated sales representative to build relationships with clients..."
  },
  {
    description: "Product Manager",
    pay: 75000.0,
    location: 36.7783,
    position: "Product",
    company: "ProductTech",
    about_the_job: "ProductTech is seeking an experienced product manager to oversee product development..."
  },
  {
    description: "Content Writer",
    pay: 45000.0,
    location: 33.6846,
    position: "Content",
    company: "ContentCo",
    about_the_job: "ContentCo is looking for a creative content writer to generate engaging written content..."
  }
])
  

  puts "done seeding..."