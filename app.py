from flask import Flask, render_template, request, jsonify

todos = []
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/todo', methods=['POST'])
def add_todo():
    data = request.json
    todo = data.get('todo', '').strip()
    todos.append(todo)
    return jsonify({'message': 'Todo added successfully', 'todos': todos})

@app.route('/api/todo', methods=['GET'])
def get_todos():
    return jsonify({'todos': todos})

app.run(debug=True)
