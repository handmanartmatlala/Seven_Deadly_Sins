extends Node2D

var viewport_initial_size = Vector2()
onready var viewport = $Viewport
onready var viewport_sprite = $ViewportSprite
# Declare member variables here. Examples:
# var a = 2
# var b = "text"





# Called every frame. 'delta' is the elapsed time since the previous frame.
func _root_viewport_size_changed():
	viewport.size = Vector2.ONE * get_viewport().size.y
	viewport_sprite.scale = Vector2(1,-1) * viewport_initial_size.y / get_viewport().size.y
