class Constellation < ActiveRecord::Base
  require 'csv'

  def self.import(file)
    constellations_to_keep = []
    CSV.foreach(file.path, headers:true) do |row|
      constellation_hash = row.to_hash
      constellation = Constellation.where(Abbreviation: constellation_hash["Abbreviation"])

      if constellation.present?
        constellation.first.update_attributes(constellation_hash)
      else
        Constellation.create!(constellation_hash)
      end
      constellations_to_keep << constellation_hash["Abbreviation"]
    end
    Constellation.where('constellations."Abbreviation" NOT IN (?)', constellations_to_keep).destroy_all
  end
end
