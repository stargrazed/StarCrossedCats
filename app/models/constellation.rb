class Constellation < ActiveRecord::Base
  require 'csv'

  validates :Constellation, :presence => true
  validates :Abbreviation, :presence => true
  validates :Family, :presence => true
  validates :Origin, :presence => true
  validates :Meaning, :presence => true
  validates :Brightest_star, :presence => true
  validates :Image, :presence => true

  def self.import(file)
    CSV.foreach(file.path, headers:true) do |row|
      Constellation.create! row.to_hash
    end
  end
end
