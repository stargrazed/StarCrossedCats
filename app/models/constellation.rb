class Constellation < ActiveRecord::Base
  require 'csv'

  def self.import(file)
    CSV.foreach(file.path, headers:true) do |row|

      constellation_hash = row.to_hash
      constellation = Constellation.where(Abbreviation: constellation_hash["Abbreviation"])

      if constellation.count == 1
        constellation.first.update_attributes(constellation_hash)
      else
        Constellation.create! (constellation_hash)
      end
    end
  end
end
