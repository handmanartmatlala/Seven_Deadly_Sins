extends Spatial


#export(String, FILE, "pride_planet.tscn") var next_scene_path


func _on_Area_input_event(camera, event, position, normal, shape_idx):
	if event is InputEventMouseButton:
		if event.button_index == BUTTON_LEFT and event.pressed == true:
			get_tree().change_scene("res://space.tscn")
		#print("has switched")
			print("Pressed Left Mouse Button")





