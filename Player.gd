extends KinematicBody

var speed = 5
var velocity = Vector3()

func _process(delta):
	
	velocity = Vector3()
	
	if Input.is_action_pressed('ui_right'): 
		velocity.x += 1
	if Input.is_action_pressed('ui_left'):
		velocity.x -= 1
	if Input.is_action_pressed('ui_up'):
		velocity.z -= 1
	if Input.is_action_pressed("ui_down"):
		velocity.z += 1
		
	velocity = velocity.normalized() * speed
		
	move_and_slide(velocity)
	
