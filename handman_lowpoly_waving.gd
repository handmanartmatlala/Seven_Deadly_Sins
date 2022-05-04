extends Spatial

#func _ready():
#pass

func _input(event:InputEvent) ->void:
	if Input.is_action_pressed("ui_home"):
		$AnimationPlayer.play("Armature|mixamocom|Layer0")
 
