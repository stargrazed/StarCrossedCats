json.array!(@constellations) do |constellation|
  json.extract! constellation, :id
  json.url constellation_url(constellation, format: :json)
end
