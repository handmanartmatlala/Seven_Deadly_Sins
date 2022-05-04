extends Spatial

# butt
export (String) var path = "res://"
export (int) var ID = 0
export (bool) var visibleTrigger = false

func _ready():
	if !visibleTrigger:
		for node in $Area.get_children():
			if node is MeshInstance:
				node.queue_free()

func _on_Area_body_entered(body):
	get_tree().change_scene("res://space.tscn")

func _on_Area_body_exited(body):
	pass # Replace with function body.

func getID():
	return ID
	pass # Replace with function body.
