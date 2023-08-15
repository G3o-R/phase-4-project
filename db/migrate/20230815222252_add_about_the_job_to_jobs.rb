class AddAboutTheJobToJobs < ActiveRecord::Migration[6.1]
  def change
    add_column :jobs, :about_the_job, :text
  end
end
