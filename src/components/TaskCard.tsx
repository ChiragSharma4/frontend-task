import { useState } from 'react';
import { Task } from '@/pages/Dashboard';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2, Clock } from 'lucide-react';
import EditTaskDialog from './EditTaskDialog';
import DeleteTaskDialog from './DeleteTaskDialog';

interface TaskCardProps {
  task: Task;
  onTaskUpdated: () => void;
  onTaskDeleted: () => void;
}

const TaskCard = ({ task, onTaskUpdated, onTaskDeleted }: TaskCardProps) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const statusColors = {
    pending: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
    in_progress: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    completed: 'bg-green-500/10 text-green-500 border-green-500/20',
  };

  const priorityColors = {
    low: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
    medium: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    high: 'bg-red-500/10 text-red-400 border-red-500/20',
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <>
      <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-semibold text-lg line-clamp-2">{task.title}</h3>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-primary"
                onClick={() => setIsEditDialogOpen(true)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-destructive"
                onClick={() => setIsDeleteDialogOpen(true)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pb-3">
          {task.description && (
            <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
              {task.description}
            </p>
          )}
          
          <div className="flex flex-wrap gap-2">
            <Badge className={statusColors[task.status]}>
              {task.status.replace('_', ' ')}
            </Badge>
            <Badge className={priorityColors[task.priority]}>
              {task.priority}
            </Badge>
          </div>
        </CardContent>
        
        <CardFooter className="pt-3 border-t border-border/50">
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            {formatDate(task.updated_at)}
          </div>
        </CardFooter>
      </Card>

      <EditTaskDialog
        task={task}
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        onTaskUpdated={onTaskUpdated}
      />

      <DeleteTaskDialog
        task={task}
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onTaskDeleted={onTaskDeleted}
      />
    </>
  );
};

export default TaskCard;
