# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160401211722) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "constellations", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "Constellation"
    t.string   "Abbreviation"
    t.string   "Family"
    t.string   "Origin"
    t.string   "Meaning"
    t.string   "Brightest_star"
    t.string   "Image"
    t.text     "Info"
  end

  create_table "facts", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "constellation"
    t.string   "abbreviation"
    t.string   "family"
    t.string   "origin"
    t.string   "meaning"
    t.string   "brightest_star"
    t.string   "image"
  end

  create_table "learns", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "maps", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "username",        limit: 20
    t.string   "name",            limit: 20
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "password_digest"
  end

  add_index "users", ["username"], name: "index_users_on_username", using: :btree

  create_table "welcomes", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
